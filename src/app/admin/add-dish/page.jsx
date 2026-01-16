'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AddDishPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState(null); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setToast(null);

        const formData = new FormData(e.target);
        
        // 1. EXTRACT DATA
        const dishData = {
            name: formData.get('name'),
            price: formData.get('price'),
            description: formData.get('description'),
            image: formData.get('image'),
        };

        // 2. VALIDATION (Check if price is valid)
        if (parseFloat(dishData.price) <= 0) {
            setToast({ type: 'error', message: 'Price must be greater than $0.00' });
            setIsLoading(false);
            return; // Stop here, don't send request
        }

        try {
            // 3. SEND REQUEST
            const res = await fetch('http://localhost:5000/api/dishes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dishData),
            });

            if (res.ok) {
                // 4. SUCCESS & REDIRECT
                setToast({ type: 'success', message: 'Dish added! Redirecting to menu...' });
                e.target.reset();
                router.refresh(); 

                // Redirect to /menu after 1.5 seconds (so user sees the success message)
                setTimeout(() => {
                    router.push('/menu');
                }, 1500);
            } else {
                throw new Error('Failed to add dish');
            }
        } catch (error) {
            setToast({ type: 'error', message: 'Error: Could not connect to server.' });
            setIsLoading(false); // Only stop loading on error (keep loading on success for redirect)
        } 
        
        // Note: We removed the 'finally' block that hides the toast 
        // to prevent it from disappearing before the redirect happens.
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 flex justify-center items-start">
            
            {/* Toast Notification */}
            {toast && (
                <div className="toast toast-top toast-end z-50">
                    <div className={`alert ${toast.type === 'success' ? 'alert-success' : 'alert-error'} text-white shadow-lg`}>
                        <span>{toast.message}</span>
                    </div>
                </div>
            )}

            <div className="w-full max-w-2xl">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Add New Item</h1>
                    <Link href="/menu" className="btn btn-ghost text-slate-500">Cancel</Link>
                </div>

                <div className="card bg-white shadow-xl border border-slate-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="form-control w-full">
                                    <label className="label"><span className="label-text font-bold text-slate-700">Dish Name</span></label>
                                    <input name="name" type="text" placeholder="e.g. Spicy Basil Chicken" className="input input-bordered bg-white w-full" required />
                                </div>
                                <div className="form-control w-full md:w-1/3">
                                    <label className="label"><span className="label-text font-bold text-slate-700">Price ($)</span></label>
                                    {/* Added min="0.01" for HTML validation too */}
                                    <input name="price" type="number" step="0.01" min="0.01" placeholder="14.99" className="input input-bordered bg-white w-full" required />
                                </div>
                            </div>

                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-bold text-slate-700">Image URL</span></label>
                                <input name="image" type="url" placeholder="https://..." className="input input-bordered bg-white w-full" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label"><span className="label-text font-bold text-slate-700">Description</span></label>
                                <textarea name="description" className="textarea textarea-bordered bg-white h-32 text-base" placeholder="Describe the dish..." required></textarea>
                            </div>

                            <button type="submit" className="btn bg-orange-600 hover:bg-orange-700 text-white w-full mt-4" disabled={isLoading}>
                                {isLoading ? <span className="loading loading-spinner"></span> : 'Save Item to Menu'}
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}