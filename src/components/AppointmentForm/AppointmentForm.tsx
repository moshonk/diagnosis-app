import { Button, Column, DatePicker, DatePickerInput, Form, FormGroup, FormLabel, Grid, Row, Select, SelectItem } from 'carbon-components-react';
import { types } from 'util';
import classes from './appointment-form.module.css';

export interface AppointmentFormProps {}

export const AppointmentForm: React.VFC<AppointmentFormProps> = () => {
	
	return (
		<div>
			<Form>
				<FormGroup legendText={'Appointment'}>
					<Grid>
						<Row>
							<Column lg={4}>
								<DatePicker dateFormat="d/m/Y" datePickerType="single">
									<DatePickerInput
										placeholder="mm/dd/yyyy"
										labelText="Appointment Date"
										id="appointment_date"
									/>
								</DatePicker>
							</Column>
							<Column lg={4}>
								<Select id={'specialist'} labelText='Specialist'>
									<SelectItem text={'Choose one'} value={''} />
								</Select>
							</Column>
							<Column lg={1}>
									<Button>Save Appointment</Button>					
							</Column>
						</Row>
					</Grid>
				</FormGroup>
			</Form>
		</div>
	);
};

function text(arg0: string, arg1: string) {
	throw new Error('Function not implemented.');
}
function action(arg0: string) {
	throw new Error('Function not implemented.');
}

function patterns(arg0: string, patterns: any, arg2: string) {
	throw new Error('Function not implemented.');
}

