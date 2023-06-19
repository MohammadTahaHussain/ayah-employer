import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobProposalsPage from "../pages/appliedJobs";
import ShortListedCandidatePage from "../pages/shortListedCandidates";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<JobProposalsPage />} path="/jobs/proposals"></Route>
                <Route element={<ShortListedCandidatePage />} path="/jobs/shortlisted"></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter