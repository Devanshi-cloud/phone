
function App() {


  let data = {
    name:"vikas",
    amount:1,
    number:'9999999999',
    MID: 'MID' + Date.now(),
    transactionId: 'T' + Date.now()
  }

  const HandleClick = async () =>{

    try {

      await axios.post('http://localhost:8000/order', data).then(res =>{

      console.log(res.data)
      if(res.data.success === true){
        window.location.href = res.data.data.instrumentResponse.redirectInfo.url
      }

      }).catch(err =>{
        console.log(err)
      })
      
    } catch (error) {
      console.log(error)
    }



  }

  return (
   <>
   <button onClick={HandleClick}>Pay Now</button>
   </>
  )
}

export default App
