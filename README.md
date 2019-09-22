# DB設計

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
belongs_to: group
belongs_to: user

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|created_at|datetime|null: false|
|updated_at|datetime|null: false|
|name|integer|null: false|
### Association
-has_many: messages
-has_many: groups_users
-has_many: users,through: :groups_users

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|created_at|datetime|null: false|
|updated_at|datetime|null: false|
|email|integer|null: false|
|name|integer|null: false|
### Association
-has_many: messages
-has_many: groups_users
-has_many: groups,through: :groups_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|interger|null: false|
|send|interger|null: false|
|name|integer|null: false|
### Association
-has_many: user