# DB設計

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
- belongs_to :coment
- belongs_to :tweet

## coments_tweetsテーブル
|Column|Type|Options|
|------|----|-------|
|coment_id|integer|null: false, foreign_key: true|
|tweet_id|integer|null: false, foreign_key: true|

### Association
belongs_to: group
belongs_to: user

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|id|string|null: false|
|created_at|string|null: false|
|updated_at|string|null: false|
|name|string|null: false|

### Association
-has_many: messages
-has_many: groups_users
-has_many: users,through: :groups_users

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|created_at|string|null: false|
|updated_at|string|null: false|
|email|string|null: false|
|name|string|null: false|

### Association
-has_many: messages
-has_many: groups_users
-has_many: groups,through: :groups_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|string|null: false|
|send|interger|null: false|
|name|integer|null: false|
|save|integer|null: false|
|management|inreger|null: false|

### Association
belongs_to: group
belongs_to: user