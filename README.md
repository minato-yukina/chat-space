# DB設計

## groups_usersテーブル

|Column|Type|
|------|----|
|user_id|integer|
|group_id|integer|

### Association

belongs_to :group
belongs_to :user

## groupsテーブル

|Column|Type|
|------|----|
|id|integer|
|created_at|datetime|
|updated_at|datetime|

### Association

-has_many: users
-has_many: group_users
through: :group_users


## usersテーブル

|Column|Type|
|------|----|
|id|integer|
|created_at|datetime|
|updated_at|datetime|
|email|integer|

### Association

has_many: group
-has_many: comment

## contentsテーブル

|Column|Type|
|------|----|
|created_at|datetime|
|update_at|datetime|
|group_name|integer|

### Association

belongs_to: user
belongs_to: content

## commentsテーブル

|Column|Type|
|------|----|
|send|integer|
|image|integer|
|user_id|integer|
|group_id|integer|
|created_at|datetime|
|updated_to|datetime|

### Association

has_many: comment
-has_many: group