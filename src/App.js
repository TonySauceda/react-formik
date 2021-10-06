import { useFormik } from 'formik'

const validate = (values) => {
	const errors = {}

	if (!values.name) {
		errors.name = 'Requerido'
	} else if (values.name.length < 5) {
		errors.name = 'El nombre es muy corto'
	}

	if (!values.lastName) {
		errors.lastName = 'Requerido'
	} else if (values.lastName.length < 5) {
		errors.lastName = 'El apellido es muy corto'
	}
	return errors
}

function App() {
	// Inicializar formik
	const formik = useFormik({
		initialValues: {
			name: '',
			lastName: '',
			email: 'correo@mail.com',
		},
		onSubmit: (values) => console.log(values),
		validate: validate,
	})
	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label>Nombre:</label>
					<input
						name="name"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.name}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
				</div>
				<div>
					<label>Apellido:</label>
					<input
						name="lastName"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.lastName}
						onBlur={formik.handleBlur} /* Que formik cuando el elemento ha sido tocado */
					/>
					{formik.touched.lastName /* Solo validar inputs que han sido tocados */ && formik.errors.lastName ? (
						<div>{formik.errors.lastName}</div>
					) : null}
				</div>
				<div>
					<label>Email:</label>
					<input
						name="email"
						type="email"
						onChange={formik.handleChange}
						value={formik.values.email}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
				</div>
				<button type="submit">Enviar</button>
			</form>
		</div>
	)
}

export default App
