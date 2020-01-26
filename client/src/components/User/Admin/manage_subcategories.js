import React, { Component } from 'react';

import FormField from '../../utils/Form/formfield';
import { update, generateData, isFormValid,resetFields,populateOptionFields} from '../../utils/Form/formActions';

import { connect } from 'react-redux';
import { getCategories,addCategory } from '../../../actions/products_actions';

class ManageSubCategories extends Component {

    state = {
        formError:false,
        formSuccess:false,
        formdata:{
            name: {
                element: 'input',
                value: '',
                config:{
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter the category'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            category: {
                element: 'select',
                value: '',
                config:{
                    label: 'Grocery category',
                    name: 'category_input',
                    options:[]
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            }
        }
    }

    updateFields = (newFormdata) => {
        this.setState({
            formdata: newFormdata
        })
    }
        componentDidMount(){
        const formdata = this.state.formdata;

        this.props.dispatch(getCategories()).then( response => {
            const newFormData = populateOptionFields(formdata,this.props.products.categories,'category');
            this.updateFields(newFormData)
        })
    }
    showCategoryItems = () => (
        this.props.products.categories ?
            this.props.products.categories.map((item,i)=>(
                <div className="category_item" key={item._id}>
                    {item.name}
                </div>
            ))
        :null
    )

    updateForm = (element) => {
        const newFormdata = update(element,this.state.formdata,'categories');
        this.setState({
            formError: false,
            formdata: newFormdata
        });
    }

    resetFieldsHandler = () =>{
        const newFormData = resetFields(this.state.formdata,'categories');

        this.setState({
            formdata: newFormData,
            formSuccess:true
        });
    }

    submitForm= (event) =>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formdata,'categories');
        let formIsValid = isFormValid(this.state.formdata,'categories')
        let existingCategories = this.props.products.categories;

        if(formIsValid){
            this.props.dispatch(addCategory(dataToSubmit,existingCategories)).then(response=>{
                if(response.payload.success){
                    this.resetFieldsHandler();
                }else{
                    this.setState({formError:true})
                }
            })
        } else {
            this.setState({
                formError: true
            })
        }
    }


    render() {
        return (
            <div className="admin_category_wrapper">
            <h1>Categories</h1>
            <div className="admin_two_column">
                
                <div className="right">
                    
                <form onSubmit={(event)=> this.submitForm(event)}>
                       <FormField
                            id={'category'}
                            formdata={this.state.formdata.category}
                            change={(element) => this.updateForm(element)}
                        />

                     <FormField
                        id={'name'}
                        formdata={this.state.formdata.name}
                        change={(element) => this.updateForm(element)}
                    />


                    {this.state.formError ?
                        <div className="error_label">
                            Please check your data
                        </div>
                        : null}
                    <button className="primaryButton" onClick={(event) => this.submitForm(event)}>
                        Add category
                    </button>

                </form>

                </div>

            </div>
            <div className="">
            <div className="left">
                    <div className="brands_container">
                        {this.showCategoryItems()}
                    </div>
                </div>
            </div>
        </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}


export default connect(mapStateToProps)(ManageSubCategories);
