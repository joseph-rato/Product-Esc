require 'test_helper'

class Api::ReviewsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_reviews_create_url
    assert_response :success
  end

  test "should get show" do
    get api_reviews_show_url
    assert_response :success
  end

  test "should get index" do
    get api_reviews_index_url
    assert_response :success
  end

end
