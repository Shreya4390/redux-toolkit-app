import * as React from 'react';
import '../app/app.css'

export interface FileProps {
    onProfileChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
    selectedFile: string;
    required?: boolean;
}

export default function InputProfile(props: FileProps) {

    const { onProfileChange, required = false, } = props;

    return (
        <div className="p-1 m-1">
            <label className='file-container'>
                Choose File
                <input className='file'
                    type="file"
                    id='profile'
                    name="profile"
                    accept="image/png, image/jpeg, image/jpg, image/img,"
                    onChange={onProfileChange}
                    required={required}
                />
            </label>
        </div>
    );
}

