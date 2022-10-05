class UsersController < ApplicationController
    def create
        user = User.create(user_params)
        session[:user_id] ||= user.id 
        if user.valid?
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
     # Auto-login
    def show
        user = User.find(session[:user_id])
            if user
                render json: user
            else
                render json: {error: "not authorized"}, status: :unauthorized
            end           
    end  
    
    def create_favorite
        user = User.find(params[:id])
        new_favorite = user.favorites.create(recipe_id: params[:recipe_id], user_id: params[:user_id])
        render json: new_favorite, status: :created

    end

    

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
