import './app.css'

const  App = () =>  {

  const handleBtnWallet = () => {
    // action buttons
    console.log('button wallet clicked')
  }

  return (
    <div>
        <div className="btn" onClick={()=>handleBtnWallet()}>Wallet</div>
        <div className="btn">Mint</div>

        <div className="btn">Button 1</div>
        <div className="btn">Button 2</div>
    </div>
  );
}

export default App;
