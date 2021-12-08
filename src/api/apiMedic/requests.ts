const ApiMedicHost = 'https://sandbox-healthservice.priaid.ch';
const lang = 'en-gb';
const format = 'json';

export async function getSymptoms(token: string) {
    const res = await fetch(`${ApiMedicHost}/symptoms?language=${lang}&format=${format}&token=${token}`, {
        method: 'GET'
    });
    return await res.json();
}

export async function getDiagnosis(token: string, symptoms: { ID: number; }[], year_of_birth: number, gender: string ): Promise<any> {
    const res = await fetch(`${ApiMedicHost}/diagnosis?symptoms=[${symptoms.map((s: { ID: any; }) => s.ID).join(',')}]&language=${lang}&format=${format}&token=${token}&gender=${gender}&year_of_birth=${year_of_birth}`, {
        method: 'GET'
    });
    return await res.json();
}