import { Button, Column, Form, FormGroup, FormItem, FormLabel, Grid, RadioButton, RadioButtonGroup, Row, TextInput } from 'carbon-components-react';
import classes from './diagnosis-form.module.css';

export interface DiagnosisFormProps {}

export const DiagnosisForm: React.VFC<DiagnosisFormProps> = () => {

	const handleClick = () => {
		alert('clicked');
	};
	
	return (
		<div>
			<Form>
				<FormGroup 
					legendText={'Diagnosis'}>
					<Grid>
						<Row>
							<Column lg={8}>
								<TextInput labelText="" id="diagnosis" readOnly />
							</Column>
							<Column lg={2}>
								<FormItem>
									<Button onClick={handleClick}>Get Diagnosis</Button>
								</FormItem>
							</Column>
						</Row>
						<Row>
							<Column lg={1}>
								<FormLabel>Diagnosis Validity</FormLabel>
							</Column>
							<Column lg={9}>
									<RadioButtonGroup name="diagnosis">
										<RadioButton labelText="Valid" value="valid"/>
										<RadioButton labelText="Invalid" value="invalid"/>
									</RadioButtonGroup>
							</Column>
						</Row>
					</Grid>
				</FormGroup>
			</Form>
		</div>
	);
};
