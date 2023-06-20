import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobProposalsPage from "../pages/appliedJobs";
import ShortListedCandidatePage from "../pages/shortListedCandidates";
import CandidateInfoPage from "../pages/candidatesInformation"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<JobProposalsPage />} path="/jobs/proposals"></Route>
                <Route element={<ShortListedCandidatePage />} path="/jobs/shortlisted"></Route>
                <Route element={<CandidateInfoPage />} path="/jobs/candidates/info"></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter