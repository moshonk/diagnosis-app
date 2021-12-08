import './App.scss';
import { Content } from 'carbon-components-react';
import PageHeader from './components/PageHeader/PageHeader';
import landingPage from './content/LandingPage/LandingPage';
import { Route, Switch } from 'react-router-dom';
import { DiagnosisForm } from './components/DiagnosisForm';
import { iSymptom, SymptomsForm } from './components/SymptomsForm';
import { AppointmentForm } from './components/AppointmentForm';
import { PatientForm } from './components/PatientForm';
import { useEffect, useState } from 'react';
import { getToken } from './api/apiMedic/auth';
import { getSymptoms } from './api/apiMedic/requests';
import { stringify } from 'querystring';

function App() {

  interface iProps {
    token: string;
    symptoms: iSymptom[];
  }

  interface iSearchProps {
    selectedSymptoms:iSymptom[];
    gender:string;
    yearOfBirth:number;
  }

  const [props, setProps] = useState<iProps>();

  useEffect(() => {
    let token: string;
    let symptoms: iSymptom[];

    const fetchToken = async () => {
      const res = await getToken();
      token = res.Token;

      const res2 = await getSymptoms(token);
      symptoms = res2.symptoms;

      const props: iProps = {
        token: token,
        symptoms: symptoms
      };

      setProps(props);
    };

  });
  return (
    <div className="App">
        <PageHeader></PageHeader>
        <Content tagName="div" style={{ border: "12px Solid rgb(215 213 213)"}}>
          <PatientForm></PatientForm>
          <SymptomsForm symptoms={props?.symptoms}></SymptomsForm>
          <DiagnosisForm></DiagnosisForm>
          <AppointmentForm></AppointmentForm>
        </Content>
    </div>
  );
}

export default App;
