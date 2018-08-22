import glamorous from 'glamorous';

export const FormContainer = glamorous.div({
    width: '100%'
});

export const Email = glamorous.input({
    boxSizing: 'border-box',
    width: '100%',
    fontFamily: 'Quicksand, sans-serif',
    background: '#353A50',
    color: 'white',
    padding: '4% 0.7%',
    marginBottom: '3%',
    fontSize: '1em',
    height: '3vh',
    border: 0,
    borderBottom: '1px solid #ada3a2',
    ':focus': {
        borderBottom: '1px solid white',
        outline: 'none',
        '::placeholder': {
            opacity: 0
        }
    },
});