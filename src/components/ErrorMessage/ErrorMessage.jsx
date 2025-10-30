import { AlertCircle } from "lucide-react";

/**
 * Error Message Component
 */
const ErrorMessage = ({ message }) => (
    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
        <div>
            <h3 className="font-semibold text-red-900">Error</h3>
            <p className="text-red-700 text-sm mt-1">{message}</p>
        </div>
    </div>
);

export default ErrorMessage;