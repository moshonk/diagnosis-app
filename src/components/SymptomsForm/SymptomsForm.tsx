import { Column, Form, FormGroup, Grid, Row, Select, SelectItem } from 'carbon-components-react';
import React, { useEffect, useState } from 'react';
import { iSymptom } from '.';
import { Store } from '../../lib/store';
// import { getSymptoms } from '../../api/apiMedic/requests';

export interface SymptomsFormProps {
	symptoms: iSymptom[] | undefined;
}

export const SymptomsForm: React.VFC<SymptomsFormProps> = () => {

	const [symptoms, setSymptoms] = useState<iSymptom[]>([]);
	const [selectedSymptoms, selectSymptom] = useState<Map<string, iSymptom>>();
		
		useEffect(() => { 
			let symptomsList: iSymptom[] = [
				{
				  "ID": 10,
				  "Name": "Abdominal pain"
				},
				{
				  "ID": 238,
				  "Name": "Anxiety"
				},
				{
				  "ID": 104,
				  "Name": "Back pain"
				},
				{
				  "ID": 75,
				  "Name": "Burning eyes"
				},
				{
				  "ID": 46,
				  "Name": "Burning in the throat"
				},
				{
				  "ID": 170,
				  "Name": "Cheek swelling"
				},
				{
				  "ID": 17,
				  "Name": "Chest pain"
				},
				{
				  "ID": 31,
				  "Name": "Chest tightness"
				},
				{
				  "ID": 175,
				  "Name": "Chills"
				},
				{
				  "ID": 139,
				  "Name": "Cold sweats"
				},
				{
				  "ID": 15,
				  "Name": "Cough"
				},
				{
				  "ID": 207,
				  "Name": "Dizziness"
				},
				{
				  "ID": 244,
				  "Name": "Drooping eyelid"
				},
				{
				  "ID": 273,
				  "Name": "Dry eyes"
				},
				{
				  "ID": 87,
				  "Name": "Earache"
				},
				{
				  "ID": 92,
				  "Name": "Early satiety"
				},
				{
				  "ID": 287,
				  "Name": "Eye pain"
				},
				{
				  "ID": 33,
				  "Name": "Eye redness"
				},
				{
				  "ID": 153,
				  "Name": "Fast, deepened breathing"
				},
				{
				  "ID": 76,
				  "Name": "Feeling of foreign body in the eye"
				},
				{
				  "ID": 11,
				  "Name": "Fever"
				},
				{
				  "ID": 57,
				  "Name": "Going black before the eyes"
				},
				{
				  "ID": 9,
				  "Name": "Headache"
				},
				{
				  "ID": 45,
				  "Name": "Heartburn"
				},
				{
				  "ID": 122,
				  "Name": "Hiccups"
				},
				{
				  "ID": 149,
				  "Name": "Hot flushes"
				},
				{
				  "ID": 40,
				  "Name": "Increased thirst"
				},
				{
				  "ID": 73,
				  "Name": "Itching eyes"
				},
				{
				  "ID": 96,
				  "Name": "Itching in the nose"
				},
				{
				  "ID": 35,
				  "Name": "Lip swelling"
				},
				{
				  "ID": 235,
				  "Name": "Memory gap"
				},
				{
				  "ID": 112,
				  "Name": "Menstruation disorder"
				},
				{
				  "ID": 123,
				  "Name": "Missed period"
				},
				{
				  "ID": 44,
				  "Name": "Nausea"
				},
				{
				  "ID": 136,
				  "Name": "Neck pain"
				},
				{
				  "ID": 114,
				  "Name": "Nervousness"
				},
				{
				  "ID": 133,
				  "Name": "Night cough"
				},
				{
				  "ID": 12,
				  "Name": "Pain in the limbs"
				},
				{
				  "ID": 203,
				  "Name": "Pain on swallowing"
				},
				{
				  "ID": 37,
				  "Name": "Palpitations"
				},
				{
				  "ID": 140,
				  "Name": "Paralysis"
				},
				{
				  "ID": 54,
				  "Name": "Reduced appetite"
				},
				{
				  "ID": 14,
				  "Name": "Runny nose"
				},
				{
				  "ID": 29,
				  "Name": "Shortness of breath"
				},
				{
				  "ID": 124,
				  "Name": "Skin rash"
				},
				{
				  "ID": 52,
				  "Name": "Sleeplessness"
				},
				{
				  "ID": 95,
				  "Name": "Sneezing"
				},
				{
				  "ID": 13,
				  "Name": "Sore throat"
				},
				{
				  "ID": 64,
				  "Name": "Sputum"
				},
				{
				  "ID": 179,
				  "Name": "Stomach burning"
				},
				{
				  "ID": 28,
				  "Name": "Stuffy nose"
				},
				{
				  "ID": 138,
				  "Name": "Sweating"
				},
				{
				  "ID": 248,
				  "Name": "Swollen glands in the armpits"
				},
				{
				  "ID": 169,
				  "Name": "Swollen glands on the neck"
				},
				{
				  "ID": 211,
				  "Name": "Tears"
				},
				{
				  "ID": 16,
				  "Name": "Tiredness"
				},
				{
				  "ID": 115,
				  "Name": "Tremor at rest"
				},
				{
				  "ID": 144,
				  "Name": "Unconsciousness, short"
				},
				{
				  "ID": 101,
				  "Name": "Vomiting"
				},
				{
				  "ID": 181,
				  "Name": "Vomiting blood"
				},
				{
				  "ID": 56,
				  "Name": "weakness"
				},
				{
				  "ID": 23,
				  "Name": "Weight gain"
				},
				{
				  "ID": 30,
				  "Name": "Wheezing"
				}
			  ];
			
			setSymptoms(symptomsList);
		},[])
	
	const handleSymptomSelection = (e:any) => {
		let tmpSymptoms: Map<string, iSymptom> = selectedSymptoms === undefined ? new Map<string, iSymptom>(): selectedSymptoms;
		tmpSymptoms.set(e.target.id, {ID:e.target.value, Name: e.target[e.target.selectedIndex].text});
		selectSymptom(tmpSymptoms);
		// Store.update((s) => {s.selectedSymptoms = selectedSymptoms});
	}
	
	return (
		<div>
			<Form>
				<FormGroup legendText={'Symptoms'}>
					<Grid>
						<Row>
							<Column lg={8}>
								<Select name="symptoms" id="symptoms1" labelText="" onChange={(e)=> handleSymptomSelection(e)}>
									<SelectItem text={'Select One'} value={''}></SelectItem>
									{symptoms.map((symptom: iSymptom)=> <SelectItem text={symptom.Name} value={symptom.ID}></SelectItem>)}								
								</Select>							
								<Select name="symptoms" id="symptoms2" labelText="" onChange={(e)=> handleSymptomSelection(e)}>
									<SelectItem text={'Select One'} value={''}></SelectItem>
									{symptoms.map((symptom: iSymptom)=> <SelectItem text={symptom.Name} value={symptom.ID}></SelectItem>)}
								</Select>							
								<Select name="symptoms" id="symptoms3" labelText="" onChange={(e)=> handleSymptomSelection(e)}>
									<SelectItem text={'Select One'} value={''}></SelectItem>
									{symptoms.map((symptom: iSymptom)=> <SelectItem text={symptom.Name} value={symptom.ID}></SelectItem>)}
								</Select>
								<Select name="symptoms" id="symptoms4" labelText="" onChange={(e)=> handleSymptomSelection(e)}>
									<SelectItem text={'Select One'} value={''}></SelectItem>
									{symptoms.map((symptom: iSymptom)=> <SelectItem text={symptom.Name} value={symptom.ID}></SelectItem>)}
								</Select>							
							</Column>
							<Column lg={1}>
								{/* <Button id="Add Symptom">Add+</Button>	*/}			
							</Column>
						</Row>
					</Grid>
				</FormGroup>
			</Form>
		</div>
	);
};

