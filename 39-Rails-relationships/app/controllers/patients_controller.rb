class PatientsController < ApplicationController

    def show #"/patients/:id"
        @patient = Patient.find(params[:id])
    end

    def new
        @patient = Patient.new
        @doctors = Doctor.all
    end

    def create
        # byebug
        @patient = Patient.create(patient_params)
        redirect_to @patient
    end

    private

    def patient_params
        params.require(:patient).permit(:name, doctor_ids: [])
    end
end
