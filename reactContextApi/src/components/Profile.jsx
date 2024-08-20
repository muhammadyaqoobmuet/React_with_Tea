import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import UserContext from '../context/context';

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return (
            <motion.div 
                className="flex justify-center items-center min-h-screen bg-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
                    className="text-xl font-bold text-gray-700"
                >
                    Waiting for user to login...
                </motion.div>
            </motion.div>
        );
    }

    return (
        <motion.div 
            className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 to-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
                <motion.h3 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-gray-800 mb-4"
                >
                    Successfully Logged in as {user.username}
                </motion.h3>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-gray-600"
                >
                    Welcome back! You can now access all features.
                </motion.p>
            </motion.div>
        </motion.div>
    );
}

export default Profile;
