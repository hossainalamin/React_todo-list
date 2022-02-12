import React from 'react'
const App = () => {
     const styleForm = ()=>{
        document.getElementById('list').style.backgroundColor = 'crimson'
    }
    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className="col-md-4">
                        <div className='card' style={{ justifyContent: 'center', display: 'flex' }}>
                            <div className="card-header">
                                <h2 className='text-light'>To Do List</h2>
                            </div>
                            <div className="card-body">
                                    <div className="mb-3">
                                        <input type="text" placeholder='Add a item' name="list" id="list" style={{width : '300px',float : 'left',borderBottom: '2px solid brown',borderTop : '0px',borderLeft : '0px',borderRight : '0px'}} onFocus={styleForm}/>
                                        <button>➕</button>
                                    </div>
                                
                                <hr style={{backgroundColor : 'brown'}}></hr>
                                <ol>
                                    <li>Buy apple</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App;