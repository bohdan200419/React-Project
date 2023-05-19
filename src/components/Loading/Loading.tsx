import React, {FC,CSSProperties} from 'react';
import {HashLoader} from "react-spinners";
import './loading.css'

interface IProps {
    loading:boolean
}
const override:CSSProperties = {
    display: "flex",
    borderColor: "red",
};

const Loading:FC<IProps> = ({loading}) => {
    return (
            <div className={'loading'}>
                <HashLoader
                    color={'#ff232f'}
                    loading={loading}
                    cssOverride={override}
                    size={150}
                    aria-label="hashLoader"
                    data-testid="loader"
                />
            </div>



    );
};

export {Loading};