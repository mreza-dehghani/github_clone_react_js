import { Formik, Form, Field } from 'formik';
import FormControl from '../../../../components/form/control';
import initialValues from './initialValues';
import validation from './validation';
import Button from '../../../../components/button';

export default props => {
	const { submit, loading } = props;

	return (
		<Formik
			initialValues={initialValues}
			validateOnMount={true}
			validationSchema={validation}
			onSubmit={values => submit(values.username)}
		>
			{formik => (
				<Form>
					<FormControl control="input" type="text" name="username" label="Username" placeholder="" />

					<Button type="primary" size="md" onClick={() => formik.submitForm()} classes="mt-3" loading={loading}>
						submit
					</Button>
				</Form>
			)}
		</Formik>
	);
};
