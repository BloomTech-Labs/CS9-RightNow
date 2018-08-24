import React from 'react'
import glamorous from "glamorous";
import {FormContainer} from "../register_modal/reg_forms_styles";

export const CheckBoxWrapper = glamorous.fieldset({
    margin: '3% 0',
    border: '1px solid white',
    borderRadius: '5px'
});

export const CheckBoxContainer = glamorous.div({
    width: '75%',
    display: 'flex',
    justifyContent: 'space-between'
});

export const CheckBox = glamorous.div({
    fontSize: '18px',
});
const userNotification = () => {
    return (
        <CheckBoxWrapper>
            <CheckBoxContainer>
                <CheckBox>
                    <div className="pretty p-default">
                        <input type="checkbox" />
                        <div className="state p-primary">
                            <label>Email</label>
                        </div>
                    </div>
                </CheckBox>

                <CheckBox>
                    <div className="pretty p-default">
                        <input type="checkbox" />
                        <div className="state p-warning">
                            <label>Text</label>
                        </div>
                    </div>
                </CheckBox>
            </CheckBoxContainer>
        </CheckBoxWrapper>
    );
};
export default userNotification;