import { Enrollment } from "../models/enrollment.model.js";
import { Course } from "../models/course.model.js";

const enrollUser = async (req, res) => {
    try {
        const { courseId } = req.body;
        if (!courseId) return res.status(400).json({ message: "Course ID is required" });

        const course = await Course.findById(courseId);
        if (!course) return res.status(404).json({ message: "Course not found" });

        const existingEnrollment = await Enrollment.findOne({
            user: req.user._id,
            course: courseId
        });

        if (existingEnrollment) {
            return res.status(400).json({ message: "User is already enrolled in this course" });
        }

        const enrollment = await Enrollment.create({
            user: req.user._id,
            course: courseId,
            progressPercentage: 0,
            isCompleted: false
        });

        res.status(201).json({ message: "Successfully enrolled in course", data: enrollment });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

const getUserEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.find({ user: req.user._id }).populate("course");
        res.status(200).json({ message: "Enrollments fetched", data: enrollments });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

const updateProgress = async (req, res) => {
    try {
        const { enrollmentId } = req.params;
        const { progressPercentage } = req.body;

        if (progressPercentage < 0 || progressPercentage > 100) {
            return res.status(400).json({ message: "Invalid progress percentage" });
        }

        const enrollment = await Enrollment.findOneAndUpdate(
            { _id: enrollmentId, user: req.user._id },
            { 
                progressPercentage, 
                isCompleted: progressPercentage === 100,
                lastWatchedAt: Date.now()
            },
            { new: true }
        );

        if (!enrollment) {
            return res.status(404).json({ message: "Enrollment not found" });
        }

        res.status(200).json({ message: "Progress updated", data: enrollment });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

export { enrollUser, getUserEnrollments, updateProgress };
