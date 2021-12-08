import { Form, FormGroup, Grid, Row, Column, RadioButtonGroup, RadioButton, NumberInput, FormLabel } from 'carbon-components-react';
import { useState } from 'react';

export interface PatientFormProps {
}

export const PatientForm: React.VFC<PatientFormProps> = () => {

	const [gender, setGender] = useState<string>();

	const [year_of_bith, setYearOfBirth] = useState<number>();

	const handleGenderChange = (e:any) => {
		setGender(e.target.value);
	}

	const handleYearChange = (e:any) => {
		setYearOfBirth(e.target.value);
	}
	
	return (
		<div>
			<Form>
				<FormGroup 
					legendText={'Patient Details'}>
					<Grid>
						<Row>
							<Column lg={4}>
								<FormLabel>Sex</FormLabel>
									<RadioButtonGroup name="Sex">
										<RadioButton labelText="Male" value="male" onChange={(e)=> handleGenderChange(e)}/>
										<RadioButton labelText="Female" value="female"  onChange={(e)=> handleGenderChange(e)}/>
									</RadioButtonGroup>
							</Column>
							<Column lg={4}>
								<NumberInput label="Year of birth" id="year_of_bith" value={0} placeholder="e.g. 1980" onChange={(e: any)=> handleYearChange(e)} />
							</Column>
						</Row>
					</Grid>
				</FormGroup>
			</Form>
		</div>
	);
};
