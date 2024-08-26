
function App(){ 

    return(
        <div className ='box1'>
             <div>
                <img style ={{borderRadius : '100%', width: '160px'}}  src="./pic/photo-1579463148228-138296ac3b98.avif" alt="#" />
            </div>
            <div style ={{textAlign :'center'}}>
                <h2>Julienne Moore</h2>
                <p style ={{color: '#a1a8b3', fontWeight : '400'}}>julianne.moore@company.com</p>
            </div>
            <div style ={{display : 'flex', gap :'80px'}}>
                {details(25, 'Posts')}
                {details(350, 'Following')}
                {details('1.5K', 'Followers')}
            </div>   
        </div>  
    )
}

function details (num, txt) {
    return(
        <div style ={{textAlign :'center'}}>
            <h3>{num}</h3>
            <p style ={{color: '#959ba5'}}>{txt}</p>
        </div>
    )
}


ReactDOM.createRoot(document.querySelector('#root')).render(<App />)