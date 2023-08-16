export default function UserForm() {

  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input type="text" name="text" id="name" placeholder="Nome" required />
      </div>
      <div className="form-control">
        <label htmlFor="Email">Email:</label>
        <input type="Email" name="Email" id="Email" placeholder="Email" required />
      </div>
    </div>
  )
}
