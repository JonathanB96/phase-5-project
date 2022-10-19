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
            # category = Category.find_by(name: params[:category])      
            # recipe = category.recipes.create(recipe_params) 
            # render json: recipe, status: :created 
            recipe = Recipe.create(name: params[:name], 
            steps: params[:steps], image_url: params[:image_url],
            category_id: Category.find_by("name LIKE ?", params[:category]).id, 
            user_id: params[:user_id],
            cuisine_id: Cuisine.find_by("name LIKE ?", params[:cuisine]).id)
            render json: recipe, status: :created      
            
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
      params.permit(:name, :steps, :image_url, :user_id)
    end

    def not_found_response
        render json: {error: "not found"}, status: :not_found
    end
end
