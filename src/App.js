// Uso de formik como componente
import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextInput from './components/TextInput'

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
	// {...formik.getFieldProps('name')}
	// De esta forma formik de pasa las propiedades name, value, onchange y onblur al elemento

	return (
		<Formik
			initialValues={{
				name: '',
				lastName: '',
				email: 'correo@mail.com',
				nombre: '',
			}}
			validate={validate}
			onSubmit={(values) => console.log(values)}
		>
			<Form>
				{/* No olvidar agregar el valor inicial a los componentes */}
				<TextInput name="nombre" label="Custom" />
				<div>
					<label>Nombre:</label>
					<Field name="name" type="text" />
					<ErrorMessage name="name" />
				</div>
				<div>
					<label>Apellido:</label>
					<Field name="lastName" type="text" />
					<ErrorMessage name="lastName" />
				</div>
				<div>
					<label>Email:</label>
					<Field name="email" type="email" />
					<ErrorMessage name="email" />
				</div>
				{/* Otros tipos de inputs con formik */}
				<Field as="textarea" name="textarea" className="textarea-css" />
				<Field as="select" name="select">
					<option>Opcion 1</option>
					<option>Opcion 2</option>
				</Field>
				<Field type="checkbox" name="checkbox" />

				<button type="submit">Enviar</button>
			</Form>
		</Formik>
	)
}

// ============================================
// Uso de formik con hooks

// import { useFormik } from 'formik'

// const validate = (values) => {
// 	const errors = {}

// 	if (!values.name) {
// 		errors.name = 'Requerido'
// 	} else if (values.name.length < 5) {
// 		errors.name = 'El nombre es muy corto'
// 	}

// 	if (!values.lastName) {
// 		errors.lastName = 'Requerido'
// 	} else if (values.lastName.length < 5) {
// 		errors.lastName = 'El apellido es muy corto'
// 	}
// 	return errors
// }

// function App() {
// 	// Inicializar formik
// 	const formik = useFormik({
// 		initialValues: {
// 			name: '',
// 			lastName: '',
// 			email: 'correo@mail.com',
// 		},
// 		onSubmit: (values) => console.log(values),
// 		validate: validate,
// 	})

// 	// {...formik.getFieldProps('name')}
// 	// De esta forma formik de pasa las propiedades name, value, onchange y onblur al elemento

// 	return (
// 		<div>
// 			<form onSubmit={formik.handleSubmit}>
// 				<div>
// 					<label>Nombre:</label>
// 					<input type="text" {...formik.getFieldProps('name')} />
// 					{formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
// 				</div>
// 				<div>
// 					<label>Apellido:</label>
// 					<input type="text" {...formik.getFieldProps('lastName')} />
// 					{formik.touched.lastName /* Solo validar inputs que han sido tocados */ && formik.errors.lastName ? (
// 						<div>{formik.errors.lastName}</div>
// 					) : null}
// 				</div>
// 				<div>
// 					<label>Email:</label>
// 					<input type="email" {...formik.getFieldProps('email')} />
// 					{formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
// 				</div>
// 				<button type="submit">Enviar</button>
// 			</form>
// 		</div>
// 	)
// }

export default App
