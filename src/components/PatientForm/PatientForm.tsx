import classes from './patient-form.module.css';

export interface PatientFormProps {}

export const PatientForm: React.VFC<PatientFormProps> = () => {
	
	return (
		<div>
			<form>
				<label htmlFor="name">
					Name:
					<input 
						type="text"
						name="name" />
				</label>
				<label htmlFor="sex">
					Male
					<input 
						type="radio"
						name="sex"
						id="sex_name"
						value="Male" />
				</label>
			</form>
		</div>
	);
};
