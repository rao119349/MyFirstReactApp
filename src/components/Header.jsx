const fname = 'Saurav';
const lname = 'Yadav';

// let curDate = new Date(2022,6,19,11); //for specific time
let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';
const textcss = {

};

if (curDate >= 1 && curDate < 12) {
    greeting = 'Good Morning';
    textcss.color = 'green';
}
else if (curDate >= 12 && curDate < 19) {
    greeting = 'Good Afternoon';
    textcss.color = 'orange';
}
else {
    greeting = 'Good Night';
    textcss.color = 'Black';
}

function Header(){
return (
    <>
    <h1><span style={textcss}>{greeting}</span> {`${fname} ${lname}`}  ! </h1>
    </>
)

}

export default Header;