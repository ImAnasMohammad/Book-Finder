import { Loader } from "lucide-react";

/**
 * Loading Spinner Component
 */
const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center py-12">
        <Loader className="w-12 h-12 text-blue-600 animate-spin" />
        <p className="mt-4 text-gray-600">Searching for books...</p>
    </div>
);

export default LoadingSpinner;