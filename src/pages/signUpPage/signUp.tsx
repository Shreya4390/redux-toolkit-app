import React from 'react'
import { addUserDetails,updateUserDetails} from './createSlice/userSlice';
import InputText from '../../component/inputText';
import InputFile from '../../component/inputProfile';
import Select from '../../component/select';
import Table from '../../component/table';
import Radio from '../../component/radioButton';
import FormButton from '../../component/formButton';
import { options, todayDate, headers } from '../../utils/constant';
import { Todo } from '../../types/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/rootReducer';
import {
    uploadFileToCloudinary
} from '../../utils/cloudunary';
import { inputNameValidation, inputEmailValidation, inputPasswordValidation } from '../../helpers/validationHelpers'

export default function SignUp(): JSX.Element {
    const dispatch = useDispatch();
    const todos = useSelector(
        (state: RootState) => state.userSlice
    );

    const [userData, setuserData] = React.useState({
        id: '',
        username: '',
        email: '',
        dateOfBirth: '',
        levelOfEducation: '',
        gender: '',
        profile: '',
        password: '',
        confirmpassword: '',
    });

    function onNameChange(e: { target: HTMLInputElement; }) {
        userData.username = e.target.value
        setuserData({
            ...userData
        })
    };

    function onEmailChange(e: { target: HTMLInputElement; }) {
        userData.email = e.target.value
        setuserData({
            ...userData
        })
    };

    function onDateOfBirthChange(e: { target: HTMLInputElement; }) {
        userData.dateOfBirth = e.target.value
        setuserData({
            ...userData
        })
    };

    function onLevelOfEducationChange(e: { target: HTMLSelectElement; }) {
        userData.levelOfEducation = e.target.value
        setuserData({
            ...userData
        })
    };

    function onRadioChange(e: { target: HTMLInputElement; }) {
        userData.gender = e.target.value
        setuserData({
            ...userData
        })
    };


    function onProfileChange(e: { target: HTMLInputElement; }) {
        if (e.target.files) {
            uploadFileToCloudinary(e ? e.target.files[0] : '').then((url) => {
                userData.profile = url
                setuserData({
                    ...userData
                })
            })
        }
    };

    function onPasswordChange(e: { target: HTMLInputElement; }) {
        userData.password = e.target.value
        setuserData({
            ...userData
        })
    };

    function onConfirmPasswordChange(e: { target: HTMLInputElement; }) {
        userData.confirmpassword = e.target.value
        setuserData({
            ...userData
        })
    };



    function handleSubmit(e: any) {
        e.preventDefault()
        userData.gender = userData.gender || 'male';
        let {
            id,
            username,
            email,
            dateOfBirth,
            levelOfEducation,
            gender,
            profile,
            password,
        } = userData;

            const item = todos.find(item => item.id === id);
           
            if (item) dispatch(updateUserDetails(id, username, email, dateOfBirth, levelOfEducation, gender, profile, password))
            
            dispatch(addUserDetails(username, email, dateOfBirth, levelOfEducation, gender, profile, password))
            
        let formInitialvalue = {
            id: Math.random().toString(36).substr(2, 9),
            username: '',
            email: '',
            dateOfBirth: '',
            levelOfEducation: '',
            gender: '',
            profile: '',
            password: '',
            confirmpassword: '',
        }
        setuserData({
            ...formInitialvalue
        })
    }

    return (
        <><div className=''>
            <header className="SignUp">
                <form className="SignUp-Container" onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    <InputText
                        handleChange={onNameChange}
                        value={userData.username}
                        label="Username"
                        id="username"
                        type="text"
                        validationFunction={inputNameValidation}
                        required={true}
                    ></InputText>
                    <InputText
                        handleChange={onEmailChange}
                        value={userData.email}
                        label="Email"
                        id="email"
                        type="email"
                        validationFunction={inputEmailValidation}
                        required={true}
                    ></InputText>
                    <InputFile
                        selectedFile={userData.profile}
                        onProfileChange={onProfileChange}
                        required={true}
                    ></InputFile>
                    <InputText
                        handleChange={onDateOfBirthChange}
                        value={userData.dateOfBirth}
                        label="Date Of Birth"
                        id="dob"
                        type="date"
                        required={true}
                        max={todayDate}
                    ></InputText>
                    <Select options={options} onChange={onLevelOfEducationChange}></Select>
                    <Radio onChange={onRadioChange} id="radio"></Radio>
                    <InputText
                        handleChange={onPasswordChange}
                        value={userData.password}
                        label="Password"
                        id="password"
                        type="password"
                        validationFunction={inputPasswordValidation}
                        required={true}
                    ></InputText>
                    <InputText
                        handleChange={onConfirmPasswordChange}
                        value={userData.confirmpassword}
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        validationFunction={inputPasswordValidation}
                        required={true}
                        match={userData.password}
                    ></InputText>
                    <FormButton />
                </form>
                <div className="row">
                    <Table
                        headers={headers}
                        editAction={(item: Todo) => {
                            setuserData({
                                id: item.id! || '',
                                username: item.username! || '',
                                email: item.email! || '',
                                profile: item.profile! || '',
                                dateOfBirth: item.dateOfBirth! || '',
                                gender: item.gender! || '',
                                levelOfEducation: item.levelOfEducation! || '',
                                password: item.password! || '',
                                confirmpassword: item.password! || ''
                            })
                        }}
                    ></Table>
                </div>
            </header>
        </div></>
    )
}

