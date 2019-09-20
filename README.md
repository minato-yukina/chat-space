# DB設計

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|image|integer|null: false, foreign_key: true|
|send|integer|null: false, foreign_key: true|

## contensテーブル

|Column|Type|Options|
|------|----|-------|
|created_at|integer|null: false, foreign_key: true|
|update_at|integer|null: false, foreign_key: true|
|group_name|integer|null: false, foreign_key: true|

## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|image|integer|null: false, foreign_key: true|
|send|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
- belongs_to :content
- belongs_to :comment
