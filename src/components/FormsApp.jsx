import { useForms } from '../hooks/useForms'

export const FormsApp = () => {
    const initialForm= {
        username: '',
        email: '',
        password: ''
    }
   const { username, email, password, onInputChange } = useForms(initialForm) // directamente buscas la propiedad del estado destructurado

    const handleSubmit = (event) => {
        event.preventDefault()
    }


  return (
    <>
    <hr />
    <h1>Forms definitivos 📝 </h1>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="username" className="form-label">User</label>
            <input type="text" className="form-control" id="username" aria-describedby="userlHelp" name="username" value={username} onChange={onInputChange}  />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={email} onChange={onInputChange}  />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={password} onChange={onInputChange} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
    
  )
}
