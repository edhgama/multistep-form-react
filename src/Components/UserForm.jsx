export default function UserForm({ data, updateFieldHandler }) {

  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input type="text"
          name="text"
          id="name"
          placeholder="Nome"
          required
          value={data.name || ''}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="Email">Email:</label>
        <input type="Email"
          name="Email"
          id="Email"
          placeholder="Email" required
          value={data.email || ''}
          onChange={(e) => updateFieldHandler("email", e.target.value)} />
      </div>
    </div>
  )
}
