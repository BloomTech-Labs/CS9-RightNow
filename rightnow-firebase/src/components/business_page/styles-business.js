import glamorous from 'glamorous';

 export const Container = glamorous.div({
          padding: "10px",
          width: "100%",
          height: "80vh",
          marginBottom: "1%",
          display: "flex",
          backgroundImage:
            'url( "https://78.media.tumblr.com/c63e7dbe088ba65fa3ecba919bf8594c/tumblr_o6nnz8Glgm1tubinno1_1280.jpg")',
          backgroundRepeat: "no-repeat",
          //background:
          //"linear-gradient(rgba(205,133,63, 0.25), rgba(205,133,63, 0.25)), url(https://zimmer7.com/fileadmin/_processed_/5/b/csm_photo-1462885928573-b5d04c6855de_9f46a27ab0.jpg)",
          backgroundSize: "cover"
 });
        
export const LeftSide = glamorous.div({
    width: '50%'
 });

export const TopLeft = glamorous.h3({
    textShadow: '2px 2px 7px #000000',
    margin: '0',
    marginTop: '10%',
    marginBottom: '1%',
    color: 'white',
    padding: '40px',
    fontSize: '40px',
    textAlign: 'center'

});

export const MiddleLeft = glamorous.h4({
    textShadow: '2px 2px 7px #000000',
    margin: '15px',
    border: '10px',
    marginTop: '1%',
    marginBottom: '5%',
    //marginLeft: '13%',
    color: 'white',
    fontSize: '20px',
    textAlign: 'center'
});

export const BottomLeft = glamorous.h3({
    textShadow: '2px 2px 7px #000000',
    margin: '15px',
    border: '10px',
    marginTop: '1%',
    marginBottom: '5%',
    //marginLeft: '5%',
    color: 'white',
    fontSize: '40px',
    textAlign: 'center'
});

export const Button = glamorous.button({
    borderRadius: '7px',
    color: '#fff',
    background: '#00c6fd',
    padding: '5% 0',
    width: '50%',
    marginLeft: '25%'
});

export const RightSide = glamorous.div({
    width: '50%'
});

export const TopRight = glamorous.div({
   
});

export const Text = glamorous.h3({
    textShadow: '2px 2px 7px #000000',
    margin: '0',
    marginTop: '10%',
    marginBottom: '1%',
    color: 'white',
    padding: '40px',
    fontSize: '40px',
    textAlign: 'center'
}); 

export const MiddleRight = glamorous.div({

});

export const Text2 = glamorous.h3({
         textShadow: "2px 2px 7px #000000",
         margin: "0",
         marginTop: "4%",
         marginBottom: "1%",
         color: "white",
         padding: "2px",
         fontSize: "40px",
         textAlign: "center"
       });

export const BottomRight = glamorous.div({
    textShadow: "2px 2px 7px #000000",
    margin: "0",
    marginTop: "10%",
    //marginBottom: "1%",
    color: "white",
    //padding: "2px",
    fontSize: "40px",
    textAlign: "center"
});


