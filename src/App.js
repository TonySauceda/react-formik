import { useFormik } from 'formik'

function App() {
	// Inicializar formik
	const formik = useFormik({
		initialValues: {
			name: '',
			lastName: '',
			email: '',
		},
		onSubmit: (values) => console.log(values),
	})
	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label>Nombre:</label>
					<input name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
				</div>
				<div>
					<label>Apellido:</label>
					<input name="lastName" type="text" onChange={formik.handleChange} value={formik.values.lastName} />
				</div>
				<div>
					<label>Email:</label>
					<input name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
				</div>
				<button type="submit">Enviar</button>
			</form>
		</div>
	)
}

export default App
