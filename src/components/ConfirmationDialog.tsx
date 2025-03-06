import { FormEvent } from "react";
import { X } from "lucide-react";

type ConfirmationDialogProps = {
    closeDialog: () => void;
    resetCode: (e: FormEvent) => void;
};

function ConfirmationDialog(p: ConfirmationDialogProps) {

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-[#1e1e2e] rounded-lg p-6 w-full max-w-md">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-white">Confirm Code Reset</h2>
                    <button onClick={p.closeDialog} className="text-gray-400 hover:text-gray-300">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={p.resetCode}>
                    <div className="flex justify-end gap-3">
                        <button
                            type="button" onClick={p.closeDialog}
                            className="px-4 py-2 text-gray-400 hover:text-gray-300">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
                            disabled:opacity-50">
                            Reset Code
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ConfirmationDialog;