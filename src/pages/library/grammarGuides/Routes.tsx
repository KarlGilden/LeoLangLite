import { RouteObject } from "react-router-dom";
import GrammarGuidesPage from "./GrammarGuidesPage";

const grammarGuidesPath = "grammar-guides";

const grammarGuidesRoutes: RouteObject[] = [
    {
        path: grammarGuidesPath,
        element: <GrammarGuidesPage />
    }

];

export { grammarGuidesRoutes };