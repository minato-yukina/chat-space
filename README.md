# DB設計

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|created_at|integer|null: false, foreign_key: true|
|updated_at|integer|null: false, foreign_key: true|

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|created_at|integer|null: false, foreign_key: true|
|updated_at|integer|null: false, foreign_key: true|

## contentsテーブル

|Column|Type|Options|
|------|----|-------|
|created_at|integer|null: false, foreign_key: true|
|update_at|integer|null: false, foreign_key: true|
|group_name|integer|null: false, foreign_key: true|

## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|send|integer|null: false, foreign_key: true|
|image|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|created_at|integer|null: false, foreign_key: true|
|updated_to|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
- belongs_to :content
- belongs_to :comment
