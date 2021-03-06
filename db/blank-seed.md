ActiveRecord::Schema.define(version: 2018_10_17_031026) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "product_discussions", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "product_id"
    t.string "body", null: false
    t.integer "body_id"
    t.integer "review_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["body_id"], name: "index_product_discussions_on_body_id"
    t.index ["product_id"], name: "index_product_discussions_on_product_id"
    t.index ["review_id"], name: "index_product_discussions_on_review_id"
    t.index ["user_id"], name: "index_product_discussions_on_user_id"
  end

  create_table "products", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "product_name", null: false
    t.string "website", null: false
    t.string "social"
    t.string "description", null: false
    t.string "around_the_web"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "details"
    t.string "video_link"
    t.index ["product_name"], name: "index_products_on_product_name", unique: true
    t.index ["user_id"], name: "index_products_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "rating", null: false
    t.string "comment", null: false
    t.string "pro"
    t.string "con"
    t.integer "product_id", null: false
    t.integer "user_id", null: false
    t.string "time_used"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id", "user_id"], name: "index_reviews_on_product_id_and_user_id", unique: true
    t.index ["product_id"], name: "index_reviews_on_product_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "email", null: false
    t.string "website"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "headline"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
