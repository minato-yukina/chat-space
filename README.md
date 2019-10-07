# DB設計

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

## coments_tweetsテーブル

|Column|Type|Options|
|------|----|-------|
|coment_id|integer|null: false, foreign_key: true|
|tweet_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
- belongs_to :coment
<<<<<<< Updated upstream
- belongs_to :tweet
=======
- belongs_to :tweet
>>>>>>> Stashed changes
