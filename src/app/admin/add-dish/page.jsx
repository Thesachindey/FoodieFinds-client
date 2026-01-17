'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

export default function AddDishPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.target);
        
        const dishData = {
            name: formData.get('name'),
            price: formData.get('price'),
            description: formData.get('description'),
            image: formData.get('image'),
        };

        if (parseFloat(dishData.price) <= 0) {
            // Using Hot Toast Error
            toast.error('Price must be greater than $0.00');
            setIsLoading(false);
            return; 
        }

        try {
            const res = await fetch('http://localhost:5000/api/dishes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dishData),
            });

            if (res.ok) {
                toast.success('Dish added! Redirecting to menu...'); // Hot Toast Success
                e.target.reset();
                router.refresh(); 

                // Redirect after 1.5s
                setTimeout(() => {
                    router.push('/menu');
                }, 1500);
            } else {
                throw new Error('Failed to add dish');
            }
        } catch (error) {
            toast.error('Error: Could not connect to server.');
            setIsLoading(false); 
        } 
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 flex justify-center items-start">
            
            <Toaster position="top-right" />

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