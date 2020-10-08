import axios from "axios";

// const url = `https://covid19.mathdro.id/api`;
const url = `https://disease.sh/v3/covid-19/all`;

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);
    console.log(data);
    const deaths = data.deaths;
    const recovered = data.recovered;
    const cases = data.cases;
    return {
      //   confirmed,
      cases,
      recovered,
      deaths,
      //   lastUpdate,
    };
  } catch (error) {}
};
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
