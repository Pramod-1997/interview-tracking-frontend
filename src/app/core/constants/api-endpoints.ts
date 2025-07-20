

const BASE_URL = 'http://localhost:5000/api/';

export const ApiEndpoints = {
    jobApplication: {
        getAll: `${BASE_URL}/job-application`,
    },
    company: {
        getAll: `${BASE_URL}company`,
        addCompany: `${BASE_URL}company`,
        getCompanyEmp: `${BASE_URL}company/recuiter`,
    },
    job: {
        getAll: `${BASE_URL}jobApplication`,
        addJob: `${BASE_URL}jobApplication`,
    },
    recuiter: {
        getAll: `${BASE_URL}recruiters`,
        addRecuiter: `${BASE_URL}recruiters`,
    },
    Question: {
        getQuestions: `${BASE_URL}interviewQuestion/allQuestions`,
        addQuestion: `${BASE_URL}interviewQuestion`,
        getSubject: `${BASE_URL}subject`,
        addSubject: `${BASE_URL}subject`,
        getTopic: `${BASE_URL}topic`,
        addTopic: `${BASE_URL}topic`,
        mapTopic: `${BASE_URL}subject/mapTopic`,
    },
}