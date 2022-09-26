class RecipesController < ApplicationController
    rescue_from  ActiveRecord::RecordNotFound, with: :not_found_response
    def index
        recipes = Recipe.all 

        render json: recipes
    end

    def show
       
        recipe = Recipe.find(params[:id])
        

        render json: recipe,  status: :ok
    
    end  

    def create 

        user = User.find_by(id: session[:user_id])
        if user
            category = Category.find_by(name: params[:category])        
            recipe = category.recipes.create(recipe_params)          
            
        else
            render json: {errors: ["unauthorized"]}, status: :unauthorized   
        end 
        
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        if user
            recipe = user.recipes.find(params[:id])
            recipe.destroy
            head  :no_content 
            
        else
            render json: {errors: ["unauthorized"]}, status: :unauthorized   
        end 

    end


    def update 
        user = User.find_by(id: session[:user_id])
        if user
            recipe = user.recipes.find(params[:id])
            recipe.update(recipe_params)
           render json: recipe
            
        else
            render json: {errors: ["unauthorized"]}, status: :unauthorized   
        end 
        

    end

    private
    
    def recipe_params
      params.permit(:name, :steps, :image_url)
    end

    def not_found_response
        render json: {error: "not found"}, status: :not_found
    end
end
