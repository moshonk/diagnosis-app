import { Store as S } from "pullstate";
import { iSymptom } from "../components/SymptomsForm";

export const Store = new S({
          selectedGender: null,
          selectedYear: null,
          selectedSymptoms: new Map<string, iSymptom>()
});