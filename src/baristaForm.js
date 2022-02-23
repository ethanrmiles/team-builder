export default function BaristaForm(props) {
    //Props coming from App.js
    const {values, update, submit} = props ;
    
    //Function that does something when the form experiences a change
    const onChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value)
    };

    //Function that does something when the form is submitted 
    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };


    //Form Questions: 
    // name: '',
    // favBrewMethod: '',
    // favCountryOfOrigin: '',
    // favDrink: '',
    // howWavy: '',

    return (
        <form className="form-container">
            <label>Name
                <input 
                name='name'
                type='text'
                placeholder='type your name'
                value={values.name}
                onChange={onChange}
                />
            </label>
            <label>Favorite Brew Method
                <input 
                name='favBrewMethod'
                type='text'
                placeholder='pourover, spro, etc.'
                value={values.favBrewMethod}
                onChange={onChange}
                />
            </label>
            <label>Favorite Country of Origin 
                <input 
                name='favCountryOfOrigin'
                type='text'
                placeholder="where yo' fav' beans from?"
                value={values.favCountryOfOrigin}
                onChange={onChange}
                />
            </label>
            <label>Favorite Drink
                <input 
                name='favDrink'
                type='text'
                placeholder='absolutely no frappuccinos.'
                value={values.favDrink}
                onChange={onChange}
                />
            </label>
            <label>What wave you ridin'?
                <select value ={values.howWavy} name='howWavy' onChange ={onChange}>
                    <option value=''>Pick your Poison</option>
                    <option value='1st Wave'>1st Wave</option>
                    <option value='2nd Wave'>2nd Wave</option>
                    <option value='3rd Wave'>3rd Wave</option>
                </select>
                <div className="submit-container">
                    <button>Submit</button>
                </div>
            </label>
        </form>
    )
}