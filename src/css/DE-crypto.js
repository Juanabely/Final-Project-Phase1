document.addEventListener('DOMContentLoaded',()=>{
    console.log('ive been linked')
    const input = document.querySelector('.input')
    document.querySelector('.search-form').addEventListener('submit',(e)=>{
e.preventDefault();
console.log(input.value)
displayDecryptoNames();
displayExchangeRates();
    })

    function displayExchangeRates(){
        const api = `https://api.coinpaprika.com/v1/coins/${input.value}`
        // console.log(err)
        fetch(api)
        .then((response) => 
        response.json())
        .then((data)=>{
            console.log(data)
            const container =document.querySelector('.container3')
                const innerContainer = document.createElement('div')
                innerContainer.innerHTML =`
                
                <div class="card card1">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfR4j-ryh025CvCRs8Aj7whr21wDJV2lHFxxK8BScxp5jZUcEU3KQUcBvRlyvV6KotMgk&usqp=CAU">
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">${data.name}<i class="material-icons right">see_more</i></span>
            <p><a href=" ${data.terms_of_use
            }">Terms of use
            </a></p>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${data.name}<i class="material-icons right">close</i></span>
            <p>Here is some more information about this coin</p>
            <p>${data.description}</p>
            <p>Still in market: ${data.is_active} </p>
            <p>Symbol: ${data.symbol} </p>
            <p>last_data_at: ${data.last_data_at
            }
        </div>
                
                
                
                `
                if(data.name === undefined){
                    innerContainer.innerHTML = ''
                }

                container.appendChild(innerContainer)

        })
        .catch((err)=>{
            console.log(err)
        })
    }





    function displayDecryptoNames (){
        const api = `https://api.n.exchange/en/api/v1/currency/`
        

        fetch(api ,{
            headers: {'Content-Type':'application/json'}
        })
        .then((response) =>
            response.json()
        )
        .then((data)=>{
            console.log(data)
            data.forEach(element => {
                const container =document.querySelector('.container2')
                const innerContainer = document.createElement('div')
                innerContainer.innerHTML = `
                
                <div class="row">
                <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <span class="card-title">${element.name}</span>
                    <p><strong>maximal_amount</strong>: 
                    ${element.maximal_amount
                    }</p>
                    <p><strong>Withdrawal_fee</storng>: ${element.withdrawal_fee
                    }
                    </p>
                    <p><strong>is_crypto</strong>: ${element.is_crypto
                    }
                    </p>
                    </div>
                    <div class="card-action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                    </div>
                </div>
                </div>
            </div>
            `
            container.appendChild(innerContainer)
            
            
            });
        })
        .catch((err)=>{
            console.log(err)
        })
    }
})